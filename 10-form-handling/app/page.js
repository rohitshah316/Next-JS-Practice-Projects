import { submitFeedback } from "./action";
import { feedbacks } from "./data";

export default function Home(){
  return(
    <main className="p-10">
      <h1 className="text-3xl font-bold">Feedback Form</h1>


      <form action={submitFeedback} className="flex flex-col gap-4 max-w-md">
        <input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        className="border p-2 rounded"
        />

      <textarea 
      name="message"
      placeholder="Enter Feedback"
      className="border p-2 rounded"
      rows={4}
      ></textarea>
        <button type="submit"
        className="bg-blue-500 text-white p-2 rounded"
        >Submit</button>
      </form>

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Feedback List</h2>
        {feedbacks.map((feedbcack,i)=>(
          <div key={i}
          className="border p-3 mb-2 rounded"
          >
            <p><strong>{feedbcack.name}</strong></p>
            <p>{feedbcack.message}</p>
          </div>
        ))}
      </div>
    </main>
  )
}