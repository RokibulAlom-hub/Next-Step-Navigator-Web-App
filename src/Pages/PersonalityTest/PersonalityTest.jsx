import React, { useState } from "react";


const PersonalityTest = () => {
    const [result,setResult] = useState('')
    const handleTest=(e)=>{
        e.preventDefault();
        const formValue = new FormData(e.target);
        const allValues = [...formValue.values()];
        console.log(allValues);
        
        const score = allValues.filter(data => data == "yes").length;
        console.log(score);
        if(score >= 3){
           setResult(' An Extrovert !')
        }
        else if(score == 2){
           setResult('An Ambivert !')
        }
        else(
           setResult('An Introvert !')
        )
    }
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg my-4 rounded-2xl border border-green-300">
      <h1 className="text-2xl font-bold text-center text-[#6C1C2E]">Personality Test</h1>
      <form onSubmit={handleTest} className="mt-4 space-y-4">
        {/* Question 1 */}
        <div>
          <p className="font-semibold">1. Do you enjoy being around people?</p>
          <label>
            <input type="radio" name="q1" value="yes" required /> Yes
          </label>
          <label className="ml-4">
            <input type="radio" name="q1" value="no" /> No
          </label>
        </div>
        {/* Question 2 */}
        <div>
          <p className="font-semibold">2. Do you like trying new activities?</p>
          <label>
            <input type="radio" name="q2" value="yes" required /> Yes
          </label>
          <label className="ml-4">
            <input type="radio" name="q2" value="no" /> No
          </label>
        </div>
        {/* Question 3 */}
        <div>
          <p className="font-semibold">3. Do you feel comfortable leading a group?</p>
          <label>
            <input type="radio" name="q3" value="yes" required /> Yes
          </label>
          <label className="ml-4">
            <input type="radio" name="q3" value="no" /> No
          </label>
        </div>
        {/* Question 4 */}
        <div>
          <p className="font-semibold">4. Do you prefer working in a team?</p>
          <label>
            <input type="radio" name="q4" value="yes" required /> Yes
          </label>
          <label className="ml-4">
            <input type="radio" name="q4" value="no" /> No
          </label>
        </div>
        <button
          type="submit"
          className="block w-full bg-[#6C1C2E] text-white py-2 rounded mt-4 "
        >
          Submit
        </button>
      </form>
      {/* Result Section */}
     {
      result && <div className="mt-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
         <h1 className="font-bold text-center text-xl">Your Personality Match With</h1>
         <p className="text-bold  text-red-600 text-center p-x ">{result}</p>
      </div>
     }
    </div>
  );
};

export default PersonalityTest;
