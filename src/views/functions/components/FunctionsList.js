import React, { useState } from 'react'
import { Plus, Code } from 'react-feather'
import { Card, CardHeader, CardBody, CardTitle, Spinner } from 'reactstrap'
import Avatar from '@components/avatar'
import { CreateFunctionModal } from './CreateFunctionModal'
import styled from 'styled-components'

const TrafficLight = styled.div`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: ${props => props.setBackground };
    box-shadow: ${props => props.setShadow };
`


export const FunctionsList = ({functions, setFunctions, setfunctionInView, functionInView, runtime, isLoading, setFunctionUrl, setRuntimeName}) => {
    const [createFunctionModal, setCreateFunctionModal] = useState(false)
    const [activeId, setActiveId] = useState(0)
    
    const handleFunction = (fn) => {
        setfunctionInView([])
        setActiveId(fn.id)
        setRuntimeName(runtime.filter(x => x.id ===  fn.runtimeId)[0].name) 
        setfunctionInView({...fn}) 
        setFunctionUrl(fn.url)
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="text-primary">Functions</CardTitle>
                    <Avatar color={'light-success'} icon={<Plus size={14} />} onClick={() => setCreateFunctionModal(!createFunctionModal) } />
                </CardHeader>
                <hr style={{margin:'auto', width:'90%'}} />
                <CardBody>
                    {isLoading && 
                        <div className="d-flex justify-content-center align-center" >
                        <Spinner color='primary' style={{height:70, width: 70, marginTop:20}}/>
                        </div>
                    }
                    <ul className="list-group">
                        {functions && functions.length > 0 && functions.map(fn => (
                            <li key ={fn.id}
                                style={{cursor:"pointer"}}
                                className={activeId === fn.id ? 'active list-group-item d-flex align-items-center' : 'list-group-item d-flex align-items-center'} 
                                onClick={() => handleFunction(fn)}>
                                <Code size={14} />
                                <p style={{margin:"0 10px"}}>{fn.functionName}</p>
                                <TrafficLight className="ml-auto" 
                                setBackground={fn.provisioningStateId === 3 ? '#28c76f' : fn.provisioningStateId === 2 ? '#ff9f43' : '#ccc'}
                                setShadow={fn.provisioningStateId === 3 ? '0 0 10px #28c76f' : fn.provisioningStateId === 2 ? '0 0 10px #ff9f43' : '0 0 10px #ccc'}
                                
                                />
                            </li>
                        ))
                        }     
                    </ul>
                </CardBody>
            </Card>
            <CreateFunctionModal createFunctionModal={createFunctionModal} setCreateFunctionModal={setCreateFunctionModal} functions={functions} setFunctions={setFunctions} runtime={runtime}/>
        </>
    )
}
