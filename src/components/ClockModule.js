import { useState } from 'react'
import LedStatus from './LedStatus'
import cpuModule from './ModuleHeader'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Badge from 'react-bootstrap/esm/Badge'

const ClockModule = () => {
    const [flagHLT, setFlagHLT] = useState(true)
    const [cycle, setCycle] = useState(0)
    const [mode, setMode] = useState(false)
    const [speed, setSpeed] = useState(100)
    return (
        <div className='cpu-module'> 
            <cpuModule.ModuleHeader name='Clock Module:'>
            </cpuModule.ModuleHeader>
            <cpuModule.ModuleFlags>
                <LedStatus label='Halt' active={flagHLT} />
                <LedStatus label='Halt 2' active={!flagHLT} />
            </cpuModule.ModuleFlags>
            <cpuModule.ModuleContent>
                <h3>
                    <Badge variant="info">
                        Clock Cycles <Badge variant="light">{cycle}</Badge>
                    </Badge>

                    <Badge variant="info">
                        Clock Speed <Badge variant="light">{speed}</Badge>
                    </Badge>
                </h3>
            </cpuModule.ModuleContent>
        </div>
    )
}

export default ClockModule
