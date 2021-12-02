import React, { useEffect, useState } from 'react'
import { FunctionsList } from './components/FunctionsList'
import { Card, CardBody } from 'reactstrap'
import { Package } from 'react-feather'
import { FunctionEditor } from './components/FunctionEditor'
import { loadRuntime, loadFunctionByIdCluster, loadFunctionsByOpenFaasId } from '../../api'
import { Link } from 'react-router-dom'


 const Functions = () => {

    const [functions, setFunctions] = useState([])
    const [functionInView, setfunctionInView] = useState([])
    const [runtime, setRuntime] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const [functionUrl, setFunctionUrl] = useState('')
    const [runtimeName, setRuntimeName] = useState('')

    useEffect(() => {
        const faasId = localStorage.getItem('idFaas') || 1
        setIsLoading(true)
        loadRuntime().then(({data}) => setRuntime(data))
        loadFunctionsByOpenFaasId(faasId).then(({data}) => setFunctions(data))
    }, [])

    useEffect(() => {
        if (functions.length > 0) {
            setIsLoading(false)
        }
    }, [functions])
    
    return (
        <div className="row ">
            <div className="col-md-3 animate__animated animate__fadeIn">
                <FunctionsList functionInView={functionInView} functions={functions} setFunctions={setFunctions} setfunctionInView={setfunctionInView} runtime={runtime} isLoading={isLoading} setFunctionUrl={setFunctionUrl} setRuntimeName={setRuntimeName}/>
             </div>
             {functionInView && functionInView.functionName !== undefined && (
                <div className="col-md-9 animate__animated animate__fadeIn">
                    <FunctionEditor functionInView={functionInView} runtimeName={runtimeName} setfunctionInView={setfunctionInView} functionUrl={functionUrl}/>
                </div>
             )
             }

    </div>
    )
}

export default Functions