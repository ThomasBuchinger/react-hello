import { useState } from 'react'
import cpuModule from './ModuleHeader'
import CpuModuleBase from './ModuleHeader'
import LedStatus from './LedStatus'

const ControlModule = () => {
    const [data, setData] = useState([true, false,true, false,true, false,true, false])
    const bitSet = 'danger'
    const bitClear = 'secondary'
    return (
        <div className='cpu-module'> 
            <cpuModule.ModuleHeader name='Control Logic:'>
            </cpuModule.ModuleHeader>
            <cpuModule.ModuleContent>
                <CpuModuleBase.LedBar data={[true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false]}></CpuModuleBase.LedBar>
            </cpuModule.ModuleContent>
        </div>
    )
}

export default ControlModule
