import React, { useState } from 'react'

function SummaryPage() {
    const [checked,setChecked]=useState(false);
  return (
    <div>
        <form>
            <input 
            type="checkbox"
            checked={checked}
            onChange={(e)=>setChecked(e.target.checked)}
            id="confirm-checkbox" 
            />
            <label htmlFor="confirm-checkbox">주문 확인2</label>
            <br></br>
            <button disabled={!checked} type="submit">주문 확인</button>
        </form>
    </div>
  )
}

export default SummaryPage