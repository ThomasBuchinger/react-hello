import { useState } from 'react'
import cpuModule from './ModuleHeader'
import Badge from 'react-bootstrap/esm/Badge'
import CpuModuleBase from './ModuleHeader'
import LedStatus from './LedStatus'


const RamDisplay = ({data}) => {
    const bitSet = 'led-ram badge badge-danger'
    const bitClear = 'led-ram badge badge-secondary'
    return (
        <span style={{display: 'flex'}}>
            <span className={data[7] ? bitSet : bitClear}>&nbsp;</span>
            <span className={data[6] ? bitSet : bitClear}>&nbsp;</span>
            <span className={data[5] ? bitSet : bitClear}>&nbsp;</span>
            <span className={data[4] ? bitSet : bitClear}>&nbsp;</span>
            <span className={data[3] ? bitSet : bitClear}>&nbsp;</span>
            <span className={data[2] ? bitSet : bitClear}>&nbsp;</span>
            <span className={data[1] ? bitSet : bitClear}>&nbsp;</span>
            <span className={data[0] ? bitSet : bitClear}>&nbsp;</span>
        </span>
    )
}

const RamModule = () => {
    const [data, setData] = useState([true, false,true, false,true, false,true, false])
    const bitSet = 'danger'
    const bitClear = 'secondary'
    var ram_content = [];
    var max_address = 16;     
    for(var i = 0; i < max_address; i++) {
        ram_content.push([true, true, false, false, false, false,true, true]);
    }

    return (
        <div className='cpu-module'> 
            <cpuModule.ModuleHeader name='Random Access Memory:'>
            </cpuModule.ModuleHeader>
            <div style={{width: '25%', float: 'left'}}>
                <cpuModule.ModuleContent>
                        {
                            ram_content.map((byte) => {
                                return <RamDisplay data={byte}></RamDisplay>
                            })
                        }
                </cpuModule.ModuleContent>
            </div>
            <div style={{width: '75%', marginLeft: '25%'}}>
                <cpuModule.ModuleFlags>
                    <LedStatus label='MEM ADDR IN' active={false}></LedStatus>
                    <LedStatus label='RAM IN' active={false}></LedStatus>
                    <LedStatus label='RAM OUT' active={false}></LedStatus>
                </cpuModule.ModuleFlags>
                <cpuModule.ModuleContent>
                    Memory Address Register: <CpuModuleBase.LedBar data={[true, false, true, false]}></CpuModuleBase.LedBar>
                    Memory Content: <CpuModuleBase.LedBar data={[true, false, true, false, true, false, true, false]}></CpuModuleBase.LedBar>
                </cpuModule.ModuleContent>
            </div>

        </div>
    )
}

export default RamModule
