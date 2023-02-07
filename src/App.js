import './App.css';
import TerminalText from './TerminalText';
import { useState, useEffect } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';


function App() {
  const terminalTitle = 'Terminal';
  const terminalStart = "$ HASSAN =>";

  const help = [
    {
      id: 1,
      help: 'Hassan --cgpa',
    },
    {
      id: 2,
      help: 'Hassan --portfolio',
    },
    {
      id: 3,
      help: 'Hassan --contact',
    },
    {
      id: 4,
      help: 'Hassan --fav-games',
    },
    {
      id: 5,
      help: 'Hassan --address',
    },
    {
      id: 6,
      help: 'Hassan --age',
    },
    {
      id: 7,
      help: 'Hassan --spotify-playlist',
    },
    {
      id: 8,
      help: 'Hassan --wallet-amount',
    },
    {
      id: 9,
      help: 'Hassan --skills',
    },
  ]

  const allCommands = [
    {
      id: 1,
      command: 'Hassan --cgpa',
      result: 'Who the hell ask these kind of questions in the 21st Century',
    },
    {
      id: 2,
      command: 'Hassan --portfolio',
      result: "https://github.com/hassanjawwad12",
    },
    {
      id: 3,
      command: 'Hassan --contact',
      result: "Contact me at hassanjawwad12@gmail.com",
    },
    {
      id: 4,
      command: 'Hassan --fav-games',
      result: "Logon ke dilon se kheelna.",
    },
    {
      id: 5,
      command: 'Hassan --address',
      result: "Address: This house has no home, This home has no heart, This heart has no soul, This soul has no part, This soul has no part feat Swallow the Sun",
    },
    {
      id: 6,
      command: 'Hassan --age',
      result: "Maghrib se Pehla ghar wapis anay wali",
    },
    {
      id: 7,
      command: 'Hassan --spotify-playlist',
      result: "https://open.spotify.com/playlist/3T1F0ZMfVKNxQ0SlX4Tuav?si=Jx4oV6GcRCqx-OFolXZlrQ",
    },
    {
      id: 8,
      command: 'Hassan --wallet-amount',
      result: "Wallet amount: Rs 0 :)",
    },
    {
      id: 9,
      command: 'Hassan --skills',
      result: "Kuch nahi ata qasm le lo",
    }
  ]


  const [command, setCommand] = useState('');
  const [error, setError] = useState(false);
  const [result, setResult] = useState('');
  const [helpShow, setShowHelp] = useState(false);
  const [showResult, setShowResult] = useState(false);
  let showCmndResult = false;
  let errorFound = true;

  const handleCommand = (e) => {
    setCommand(e.target.value);
  }

  useEffect(() => {
    setResult('');
    setShowHelp(false);
    setShowResult(false);
    showCmndResult = false;
  }, [showCmndResult]);

  const handleSubmit = (e) => {
    e.preventDefault();
    showCmndResult = false;

    if (command === 'Hassan --help') {
      setError(false);
      setShowHelp(true);
      setShowResult(false);
      return;
    }
    else if (command !== '') {
      setShowHelp(false);
      for (let i = 0; i < allCommands.length; i++) {
        if (command === allCommands[i].command) {
          setError(false);
          setShowResult(true);
          setResult(allCommands[i].result);
          showCmndResult = true;
        }else if (i == allCommands.length - 1 && showCmndResult === false) {
          setError(true);
          setShowResult(false);
          showCmndResult = false;
        }
      }
      return;
    }
  }

  const disclaimer = "This project is built purely for learning purposes so the information provided here can be wrong. No part of this Application comes under any sort of free license. You can take inspiration from it but cannot copy its code and design.";

  return (
    <div className="App">
      <div className="lg:hidden xl:hidden mblScrn flex h-screen w-screen items-center justify-center">
        <h1 className='text-xl text-center text-green-200 text-bold uppercase tracking-wider'>Mobile and Tablets are not supported yet :(</h1>
      </div>
      <div className='h-screen w-screen bg-gradient p-24 hidden lg:flex flex-auto overflow-hidden antialiased'>
        <div className='grid grid-cols-5 gap-12 w-full h-full'>
          <div className='col-span-1 row-span-2'>
            <div className='flex flex-col justify-evenly items-start  h-full'>
              <div className='flex flex-col justify-center items-start space-y-2 h-auto w-auto'>
                <div><h1 className='text-green-200 text-6xl text-left font-bold'>HASSAN</h1></div>
                <div><h1 className='text-green-200/30 text-[0.865rem] text-left uppercase tracking-wider font-normal'>Written in ReactJS & TailwindCSS</h1></div>
              </div>
              <div className='flex flex-col justify-center items-start space-y-2 h-auto mt-10'>
                <div className='mb-2 text-green-200/90 uppercase text-3xl font-bold'>disclaimer </div>
                <div className='text-green-200/70 font-light text-justify'>{disclaimer}</div>
                <div className='mt-7'></div>
                <div className='text-white/90 font-bold text-justify'>NO DATA WILL BE COLLECTED AND NO COMMAND WILL BE STORED ON SERVER.</div>
              </div>
            </div>
          </div>
          <div className='col-span-4 row-span-3 terminalBg p-10 overflow-auto'>
            <div className='flex flex-col p-2 justify-between items-center w-full'>
              <h1 className='text-green-200 tracking-wider font-bold text-5xl uppercase'>{terminalTitle}</h1>
            </div>
            <div className='flex flex-col gap-5 justify-between items-start w-full mt-10'>
              <div className='flex flex-row gap-5 flex-wrap items-center w-10/12'>
                <TerminalText handleChange={handleCommand} handleSubmit={handleSubmit} terminalStart={terminalStart} />
                <div className='flex flex-row flex-wrap items-start justify-start gap-y-5 w-full'>
                  {helpShow && help.map((item, index) => {
                    return (
                      <div key={index} className='text-2xl text-yellow-100 w-1/2'>{item.help}</div>
                    )
                  }
                  )}
                </div>
                {error && <h1 className='text-xl text-red-200 font- mr-8'>Command Not Found. Type "Hassan --help"</h1>}
                {showResult && <h1 className='text-2xl text-yellow-100 font- mr-8 leading-loose'>{result}</h1>}
              </div>
            </div>
          </div>
          <div className='col-span-1 row-span-1 w-full h-full'>
            <div className='flex flex-col justify-around h-full w-full'>
              <div className='w-full items-center justify-center flex'>
                <a href='https://github.com/AbdurehmanSaleemi/react-terminal-app/issues' className='w-full h-full text-center p-5 text-xl uppercase text-white btnBg ease-in duration-75 hover:scale-110 hover:ease-in hover:duration-75 cursor-pointer antialiased'>Report a Bug</a>
              </div>
              <div className='w-full items-center justify-center flex'>
                <a href='https://github.com/AbdurehmanSaleemi/react-terminal-app' className='w-full inline-flex items-center gap-5 justify-center text-center text-xl uppercase text-white p-0 ease-in duration-75 hover:scale-110 hover:ease-in hover:duration-75 cursor-pointer antialiased'>Source Code <BsArrowRightShort className='text-2xl' /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
