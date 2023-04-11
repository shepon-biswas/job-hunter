import { getStoredJobData } from "../utils/fakedb";


export const savedJobData = async () => {
  const jobsData = await fetch('/jobs.json')
  const jobs = await jobsData.json()

  const savedData = getStoredJobData();
  const initialJobs = []
  for (const id in savedData) {
    const foundJob = jobs.find(job => job.id == id)
    if (foundJob) {
      initialJobs.push(foundJob)
    }
  }

  return { jobs,initialJobs }
}