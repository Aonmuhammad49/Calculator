const Firstfunction = ()=>{
  console.log("test")
  return(
    <div className="container">
  <div className="calculator">
    <form action="">
      <div className="display">
        <input type="text" id="display" readOnly />
      </div>
      <div>
        <input type="button" class="operator" value="AC" onClick={() => document.getElementById('display').value = ''}  />
        <input type="button" class="operator" value="DE" onClick={() => document.getElementById('display').value = document.getElementById('display').value.toString().slice(0,-1)} />
        <input type="button" class="operator" value="." onClick={() => document.getElementById('display').value += '.'} />
        <input type="button" class="operator" value="/" onClick={() => document.getElementById('display').value += '/'} />
      </div>
      <div>
        <input type="button" value="7" onClick={() => document.getElementById('display').value += '7'} />
        <input type="button" value="8" onClick={() => document.getElementById('display').value += '8'} />
        <input type="button" value="9" onClick={() => document.getElementById('display').value += '9'} />
        <input type="button" value="*" onClick={() => document.getElementById('display').value += '*'} class="operator"/>
      </div>
      <div>
        <input type="button" value="4" onClick={() => document.getElementById('display').value += '4'} />
        <input type="button" value="5" onClick={() => document.getElementById('display').value += '5'} />
        <input type="button" value="6" onClick={() => document.getElementById('display').value += '6'} />
        <input type="button" value="-" onClick={() => document.getElementById('display').value += '-'} class="operator"/>
      </div>
      <div>
        <input type="button" value="1" onClick={() => document.getElementById('display').value += '1'} />
        <input type="button" value="2" onClick={() => document.getElementById('display').value += '2'} />
        <input type="button" value="3" onClick={() => document.getElementById('display').value += '3'} />
        <input type="button" value="+" onClick={() => document.getElementById('display').value += '+'} class="operator"/>
      </div>
      <div>
        <input type="button" value="00" onClick={() => document.getElementById('display').value += '00'} />
        <input type="button" value="0" onClick={() => document.getElementById('display').value += '0'} />
        <input type="button" value="=" onClick={() => document.getElementById('display').value = eval(document.getElementById('display').value)} className="equal" />
      </div>
    </form>
  </div>
</div>


  )
}
export default Firstfunction;