import {
  collection,
  getDocs,
  query,
  orderBy,
  QueryConstraint,
} from "firebase/firestore";
import { db } from "./firebase";
import { Certificate, EducationEntry, Project, Skill } from "../types";

// Job History interface (matches WorkHistory.tsx)
export interface JobHistory {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  icon: string;
  description: (string | null)[];
}

/**
 * Generic function to fetch all documents from a Firestore collection
 * @throws Error if fetch fails after retries
 */
export async function getCollection<T>(
  collectionName: string,
  ...queryConstraints: QueryConstraint[]
): Promise<T[]> {
  const maxRetries = 3;
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const collectionRef = collection(db, collectionName);
      const q =
        queryConstraints.length > 0
          ? query(collectionRef, ...queryConstraints)
          : collectionRef;

      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as T[];
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.error(
        `Firestore query failed for collection "${collectionName}" (attempt ${attempt}/${maxRetries}):`,
        lastError
      );

      if (attempt < maxRetries) {
        // Exponential backoff: wait 1s, 2s, 4s, etc.
        await new Promise((resolve) =>
          setTimeout(resolve, Math.pow(2, attempt - 1) * 1000)
        );
      }
    }
  }

  // All retries failed
  throw new Error(
    `Failed to fetch collection "${collectionName}" after ${maxRetries} attempts: ${lastError?.message}`
  );
}

/**
 * Fetch job history ordered by start date
 */
export async function getJobHistories(): Promise<JobHistory[]> {
  return getCollection<JobHistory>("jobHistory", orderBy("startDate", "desc"));
}

/**
 * Fetch education records
 */
export async function getEducation(): Promise<EducationEntry[]> {
  return getCollection<EducationEntry>("education", orderBy("start", "desc"));
}

/**
 * Fetch certificates
 */
export async function getCertificates(): Promise<Certificate[]> {
  return getCollection<Certificate>(
    "certificates",
    orderBy("completionDate", "desc")
  );
}

/**
 * Fetch projects
 */
export async function getProjects(): Promise<Project[]> {
  return getCollection<Project>("projects");
}

/**
 * Fetch skills
 */
export async function getSkills(): Promise<Skill[]> {
  return getCollection<Skill>("skills");
}
