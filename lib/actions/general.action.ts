import { auth, db } from "@/firebase/admin";

export async function getInterviewsByUserId(userId : string): Promise<Interview[] | null>{
  const interviews = await db
  .collection('interviews')
  .where('userId','==',userId)
  .orderBy('createdAt','desc')
  .get();

  return interviews.docs.map((doc)=>({
    id:doc.id,
    ...doc.data()
  }))as Interview[];
}

export async function getLatestInterviews(params: GetLatestInterviewsParams): Promise<Interview[] | null>{
  const {userId,limit = 20} = params;
  const interviews = await db
  .collection("interviews")
  .where("finalized", "==", true)
  .orderBy("createdAt", "desc")
  .limit(limit * 2) // Fetch extra in case some are filtered out
  .get();

const filtered = interviews.docs
  .map((doc) => ({ id: doc.id, ...doc.data() } as Interview))
  .filter((interview) => interview.userId !== userId)
  .slice(0, limit); // Ensure final limit is respected

return filtered;
}

export async function getInterviewById(id: string): Promise<Interview | null> {
    const interview = await db.collection("interviews").doc(id).get();
  
    return interview.data() as Interview | null;
  }
  