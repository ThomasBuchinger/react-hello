import { useState } from 'react'
import cpuModule from './ModuleHeader'
import CpuModuleBase from './ModuleHeader'
import LedStatus from './LedStatus'

const RegisterBModule = () => {
    const [data, setData] = useState([true, false,true, false,true, false,true, false])
    const bitSet = 'danger'
    const bitClear = 'secondary'
    return (
        <div className='cpu-module'> 
            <cpuModule.ModuleHeader name='B Register:'>
            </cpuModule.ModuleHeader>
            <cpuModule.ModuleFlags>
                <LedStatus label='B In' active={false}></LedStatus>
                <LedStatus label='B Out' active={false}></LedStatus>
            </cpuModule.ModuleFlags>
            <cpuModule.ModuleContent>
                <CpuModuleBase.LedBar data={[true, false, true, false, true, false, true, false]}></CpuModuleBase.LedBar>
            </cpuModule.ModuleContent>
        </div>
    )
}

export default RegisterBModule
