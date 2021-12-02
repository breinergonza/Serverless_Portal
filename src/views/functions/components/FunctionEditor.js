import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Input, Label, CardFooter, Button, Alert } from 'reactstrap'
import Editor, { useMonaco } from "@monaco-editor/react"
import { supportedLanguages } from './suportedLanguages'
import { AlertCircle, Info, Package } from 'react-feather'
import { SweetAl } from '../../../shared/components/SweetAl'
import Swal from 'sweetalert2'
import { putFunction, postBuildFunction } from '../../../api/index'


export const FunctionEditor = ({functionInView, runtimeName, setfunctionInView, functionUrl}) => {
    const {functionName, codeFunction, runtimeId, id, identifier} = functionInView
    const [languageSelected, setLanguageSelected] = useState('')
    const [visible, setVisible] = useState('')
    const [errors, setErrors] = useState([])
    const [errorMarkers, setErrorMarkers] = useState([])
    const intellisenseValidation = ['typescript', 'javascript', 'css', 'less', 'scss', 'json', 'html']
    const IntellisenseMesage = [{msg: 'This language have rich IntelliSense and validation'}, {msg:'This language only have basic syntax colorization'}]
    const [msgAlert, setMsgAlert] = useState(null)
    const [codeInEditor, setCodeInEditor] = useState()
    const openFaasId = localStorage.getItem('idFaas') || 1

    const handleBuildFunction = () => {
        Swal.showLoading()
        
        const dataJson = {
            id,
            openFaasId,
            functionName,
            identifier,
            runtimeId,
            codeFunction: codeInEditor || codeFunction
        }
        if (codeInEditor !== '' || codeInEditor !== undefined) {
            postBuildFunction(dataJson).then(({success}) => {
                if (success) {
                    SweetAl('Success', 'Build in Progress', 'success')

                } else {
                    SweetAl('Error', 'Error Building Function', 'error')
                }
            })

        }
    }

    const handleUpdateFunction = () => {
        
        const dataJson = {
            userId: 1, /* Cambiar Al usar Login*/
            id,
            openFaasId,
            functionName,
            identifier,
            runtimeId,
            codeFunction: codeInEditor
        }

        if (codeInEditor !== '' || codeInEditor !== undefined) {
            putFunction(dataJson).then(({data, success}) => {
                if (success) {
                    SweetAl('Success', 'Update Successfully', 'success')
                    

                } else {
                    SweetAl('Error', 'Error Updating The Function', 'error')
                }
            })

        }
    }


    const handleEditorValidation = (markers) => {
        setErrorMarkers(markers)
    }

    useEffect(() => {
        setErrorMarkers([])
    }, [functionInView])


    useEffect(() => {
        if (errorMarkers.length === 0) {
            setVisible(false)
            setErrors([])
        }

    }, [errorMarkers])

    useEffect(() => {
        switch (runtimeId) {
            case 1 :
                setLanguageSelected(supportedLanguages[18].label) 
                break
            case 2 :
                setLanguageSelected(supportedLanguages[18].label) 
                break
            case 3 :
                setLanguageSelected(supportedLanguages[18].label) 
                break
            case 4 :
                setLanguageSelected(supportedLanguages[36].label) 
               break
            case 5 :
                setLanguageSelected(supportedLanguages[36].label) 
               break
            case 6 :
                setLanguageSelected(supportedLanguages[12].label) 
               break
            default:
                break
        }


    }, [functionInView])

    useEffect(() => {
        setMsgAlert(intellisenseValidation.includes(languageSelected))
       
    }, [languageSelected])

    useEffect(() => {
        setfunctionInView(prevstate => ({ ...prevstate, errors:[]}))
    }, [])

    return (
        <Card style={{width:"100%"}}>
            <CardHeader style={{marginBottom:-5, display:"flex", alignItems:"start"}} >
                <div>
                <CardTitle >{functionName} - {runtimeName}</CardTitle>
                <Alert style={{marginTop:5}} color='info' isOpen={true} className="mb-0">
                    <Info size="14" style={{marginLeft:10}}/>
                    <small className='alert-body'>
                     { msgAlert === true ?
                        IntellisenseMesage[0].msg
                     :
                        IntellisenseMesage[1].msg
                     }
                    </small>
                </Alert>
                </div>
                {functionUrl &&
                    <div>
                    Function URL 
                        <h5>
                        <a href={`${functionUrl}`} target="_blank">
                            {functionUrl}
                        </a>
                        </h5>

                    </div>
                }
            </CardHeader>

        <CardBody >
            <div className='form-label-group mb-1 w-100'>
            <Editor
                height="50vh"
                theme="vs-dark"
                onChange={(e) => setCodeInEditor(e)}
                defaultLanguage={languageSelected}
                path={languageSelected}
                defaultValue={codeFunction}
                onValidate={handleEditorValidation}
                value={codeFunction}
            />

            </div>
            { errorMarkers.map((err, index) => (
                <Alert color='danger' isOpen={true} key={index} className="mb-1">
                    <small className='alert-body'>
                        <span className=''>
                                <strong>Line : {err.startLineNumber}</strong> {err.message}
                        </span>
                    </small>
                </Alert>

            )
            )
            }
        </CardBody>
        <div className="d-flex justify-content-end mb-2">
            <Button.Ripple type="button" color='primary' outline onClick={handleBuildFunction} disabled={codeFunction === undefined || codeFunction === ''} >Build</Button.Ripple>{/* disabled={errorMarkers.length > 0}  */}
            <Button.Ripple color='success' outline  className="mx-2" onClick={handleUpdateFunction} disabled={codeInEditor === undefined || codeInEditor === ''}>Update</Button.Ripple>
        </div>

     </Card>
    )
}
