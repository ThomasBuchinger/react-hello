import React from 'react'
import Dummy from './Dummy'
import './CpuLayout.css'
import ClockModule from './ClockModule'
import BusModule from './BusModule'
import RamModule from './RamModule'
import InstructionRegister from './InstructionRegister'
import ProgramCounterModule from './ProgramCounterModule'
import RegisterAccModule from './RegisterAccModule'
import ALUModule from './ALUModule'
import RegisterBModule from './RegisterBModule'
import ControlModule from './ControlModule'
import DisplayModule from './DisplayModule'

const CpuLayout = () => {
  return (
    <div className='cpu-container'>
    <div className='cpu-clock'><ClockModule /></div>
      <div className='cpu-pc'><ProgramCounterModule></ProgramCounterModule></div>
      <div className='cpu-bus'><BusModule /></div>
      <div className='cpu-rega'><RegisterAccModule></RegisterAccModule></div>
      <div className='cpu-regb'><RegisterBModule></RegisterBModule></div>
      <div className='cpu-alu'><ALUModule></ALUModule></div>
      <div className='cpu-ram'><RamModule></RamModule></div>
      <div className='cpu-ir'><InstructionRegister></InstructionRegister></div>
      <div className='cpu-display'><DisplayModule></DisplayModule></div>
      <div className='cpu-control'><ControlModule></ControlModule></div>
    </div>
  )
}

export default CpuLayout

