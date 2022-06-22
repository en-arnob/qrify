import InputForm from "./components/InputForm";

function App() {
  return (
    <div className='bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900 min-h-screen min-w-screen'>
      <div className='bg-slate-900 p-3 py-5 shadow-lg t-0'>
        <h1 className='text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  text-2xl justify-center items-center'>
          QRify
          <p className='text-sm font-normal text-gray-400 mt-2'>
            QR CODE GENERATOR
          </p>
        </h1>
      </div>
      <div className='mx-4 mt-40 lg:mx-auto max-w-4xl bg-slate-900 rounded-lg shadow'>
        <div className='md:grid md:grid-cols-3'>
          <InputForm />
          <h1>qr</h1>
        </div>
      </div>
      <div className='mb-2 fixed bottom-0 w-full'>
        <h1 className='text-center text-gray-200 font-bold  text-sm justify-center items-center'>
          © 2022, Khalid Arnob
        </h1>
      </div>
    </div>
  );
}

export default App;
