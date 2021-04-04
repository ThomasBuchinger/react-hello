import { useState } from 'react'
import cpuModule from './ModuleHeader'
import Badge from 'react-bootstrap/esm/Badge'
import CpuModuleBase from './ModuleHeader'
import LedStatus from './LedStatus'

const BusModule = () => {
    const [data, setData] = useState([true, false,true, false,true, false,true, false])
    const bitSet = 'danger'
    const bitClear = 'secondary'
    return (
        <div className='cpu-module'> 
            <cpuModule.ModuleHeader name='Instruction Register:'>
            </cpuModule.ModuleHeader>
            <cpuModule.ModuleFlags>
                <LedStatus label='IR In' active={false}></LedStatus>
                <LedStatus label='IR Out' active={false}></LedStatus>
            </cpuModule.ModuleFlags>
            <cpuModule.ModuleContent>
                <CpuModuleBase.LedBar data={[true, false, true, false, true, false, true, false]}></CpuModuleBase.LedBar>
            </cpuModule.ModuleContent>
        </div>
    )
}

export default BusModule
