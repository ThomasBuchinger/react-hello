import { useState } from 'react'
import cpuModule from './ModuleHeader'
import CpuModuleBase from './ModuleHeader'
import LedStatus from './LedStatus'

const ALUModule = () => {
    const [data, setData] = useState([true, false,true, false,true, false,true, false])
    const bitSet = 'danger'
    const bitClear = 'secondary'
    return (
        <div className='cpu-module'> 
            <cpuModule.ModuleHeader name='ALU:'>
            </cpuModule.ModuleHeader>
            <cpuModule.ModuleFlags>
                <LedStatus label='Sub' active={false}></LedStatus>
                <LedStatus label='ALU Out' active={false}></LedStatus>
            </cpuModule.ModuleFlags>
            <cpuModule.ModuleContent>
                <CpuModuleBase.LedBar data={[true, false, true, false, true, false, true, false]}></CpuModuleBase.LedBar>
            </cpuModule.ModuleContent>
        </div>
    )
}

export default ALUModule
