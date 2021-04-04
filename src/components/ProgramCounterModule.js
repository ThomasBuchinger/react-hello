import { useState } from 'react'
import cpuModule from './ModuleHeader'
import CpuModuleBase from './ModuleHeader'
import LedStatus from './LedStatus'

const ProgramCounterModule = () => {
    const [data, setData] = useState([true, false,true, false,true, false,true, false])
    const bitSet = 'danger'
    const bitClear = 'secondary'
    return (
        <div className='cpu-module'> 
            <cpuModule.ModuleHeader name='Program Counter:'>
            </cpuModule.ModuleHeader>
            <cpuModule.ModuleFlags>
                <LedStatus label='Jump' active={false}></LedStatus>
                <LedStatus label='PC Out' active={false}></LedStatus>
                <LedStatus label='Enable' active={true}></LedStatus>
            </cpuModule.ModuleFlags>
            <cpuModule.ModuleContent>
                <CpuModuleBase.LedBar data={[true, false, true, false, true, false, true, false]}></CpuModuleBase.LedBar>
            </cpuModule.ModuleContent>
        </div>
    )
}

export default ProgramCounterModule
