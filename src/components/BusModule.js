import { useState } from 'react'
import cpuModule from './ModuleHeader'
import Badge from 'react-bootstrap/esm/Badge'
import CpuModuleBase from './ModuleHeader'

const BusModule = () => {
    const [data, setData] = useState([true, false,true, false,true, false,true, false])
    const bitSet = 'danger'
    const bitClear = 'secondary'
    return (
        <div className='cpu-module'> 
            <cpuModule.ModuleHeader name='Data BUS:'>
            </cpuModule.ModuleHeader>
            <cpuModule.ModuleContent>
                <CpuModuleBase.LedBar data={[true, false, true, false, true, false, true, false]}></CpuModuleBase.LedBar>
            </cpuModule.ModuleContent>
        </div>
    )
}

export default BusModule
