import { useState } from 'react'
import cpuModule from './ModuleHeader'
import CpuModuleBase from './ModuleHeader'
import LedStatus from './LedStatus'

const DisplayModule = () => {
    const [data, setData] = useState([true, false,true, false,true, false,true, false])
    const bitSet = 'danger'
    const bitClear = 'secondary'
    return (
        <div className='cpu-module'> 
            <cpuModule.ModuleHeader name='Display:'>
            </cpuModule.ModuleHeader>
            <cpuModule.ModuleFlags>
                <LedStatus label='Display In' active={false}></LedStatus>
            </cpuModule.ModuleFlags>
            <cpuModule.ModuleContent>
                <CpuModuleBase.LedBar data={[true, false, true, false, true, false, true, false]}></CpuModuleBase.LedBar>
                Decimal: 42
            </cpuModule.ModuleContent>
        </div>
    )
}

export default DisplayModule
