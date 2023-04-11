// use local storage to manage applied Job Data
const addToDb = id => {
    let appliedJob = {}
  
    //get the stored job from local storage
    const getStoredJobID = localStorage.getItem('job_id')
    if (getStoredJobID) {
      appliedJob = JSON.parse(getStoredJobID)
    }
  
    // add quantity
    const quantity = appliedJob[id]
    if (quantity) {
      const newQuantity = quantity + 1
      appliedJob[id] = newQuantity
    } else {
      appliedJob[id] = 1
    }
    localStorage.setItem('job_id', JSON.stringify(appliedJob))
  }
  
  const getStoredJobData = () => {
    let appliedJob = {}
    //get the stored job from local storage
    const storedJobId = localStorage.getItem('job_id')
    if (storedJobId) {
      appliedJob = JSON.parse(storedJobId)
    }
    return appliedJob
  }
  
  const removeFromDb = id => {
    const storedJobId = localStorage.getItem('job_id')
    if (storedJobId) {
      const appliedJob = JSON.parse(storedJobId)
      if (id in appliedJob) {
        delete appliedJob[id]
        localStorage.setItem('job_id', JSON.stringify(appliedJob))
      }
    }
  }
  
  const deleteAppliedJob = () => {
    localStorage.removeItem('job_id')
  }
  
  export { addToDb, getStoredJobData, removeFromDb, deleteAppliedJob }

