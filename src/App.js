
import './App.css';

function App() {
  const handlePrint = () => {
    window.print()
  }
  return (
    <>
      <main className=" m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow"> 
        {/* header */}
        <header className="flex flex-col items-center justify-center mb-5">
          <div>
            <h1 className=' font-bold uppercase tracking-wide text-4xl mb-3'>Invoicer</h1>
          </div>

          <div>
            <ul className="flex items-center 
            justify-between flex-wrap">
              <li>
                <button onClick={handlePrint}
                className="btn btn-print">Print</button>
              </li>
              <li>
                <button className="btn
                 btn-download" >Download</button>
              </li>
              <li>
                <button className="btn 
                btn-send">Send</button>
              </li>
            </ul>
          </div>
        </header>
        {/* end of header */}

        {/* your details */}
        <section className="flex flex-col items-end
         justify-end"> 
          <h2 className='text-xl uppercase'> Akansha salwan</h2>
          <p>Your Address</p>
        </section>
        {/* end of your details */}

        {/*client details  */}
        <section className='mt-5'>
          <h2 className='text-xl uppercase'>Clients Name</h2>
          <p>Client address</p>
        </section>
        {/* end of client details */}

        {/* dates */}
        <article className='my-5 flex  items-end
         justify-end'>
          <ul>
            <li> <span className='font-bold'> Invoicer number:</span>ddddddddd</li>
            <li> <span className='font-bold'>Invoice date: </span></li>
            <li> <span className='font-bold'> Due date:</span></li>
          </ul>
        </article>
        {/* end of date */}

        {/* table */}

        {/* end of table */}
<div className=''> This is a Table</div>
        {/* notes */}
        <section className='mb-5'>
          {/* textarea */}
          <p>Notes to the clients...</p>
        </section>
        {/* end of notes */}

        {/* footer */}
        <footer>
          <ul className='flex flex-wrap items-center justify-center'>
            <li><span> Your Name </span></li>
            <li><span> Your Email </span></li>
            <li><span> Phone Number</span></li>
            <li><span> Bank </span></li>
            <li><span>  Account Holder</span></li>
            <li><span> Account Number </span></li>
            <li><span>  Website</span></li>
          </ul>
        </footer>
        {/* end of footer */}

      </main>

    </>
  );
}

export default App;
