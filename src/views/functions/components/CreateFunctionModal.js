import { Form, Formik, Field } from 'formik'
import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, FormGroup, Input, Label, Col, Button } from 'reactstrap'
import FormFeedback from 'reactstrap/lib/FormFeedback'
import Swal from 'sweetalert2'
import * as yup from 'yup'
import { postFunction } from '../../../api'
import { InputTag } from '../../../shared/components/InputTag'
import { SweetAl } from '../../../shared/components/SweetAl'


export const CreateFunctionModal = ({setCreateFunctionModal, createFunctionModal, functions, setFunctions, runtime}) => {

    const [dependencies, setDependencies] = useState([])
    const [dependeciesOptions, setDependeciesOptions] = useState([])
    const CreateFunctionSchema = yup.object().shape({
        functionName: yup.string().required('The name of the function is required').min(4, 'Must be 3 characters or more'),
        runtimeId: yup.string().required('The runtime is required')
    })

    const id = JSON.parse(localStorage.getItem('idFaas')) || 1

    const customSubmit = (e, values, handleReset) => {
        Swal.showLoading()
        e.preventDefault()
        values.dependencies = dependencies.toString()
        postFunction(values).then(({data}) => {
            setFunctions(oldArray => [...oldArray, data])
        }).then(
            SweetAl('Success', 'Function Created Successfully', 'success')
        ).catch(err => SweetAl('Error', 'Error creating function', 'error'))
        handleReset()
        setCreateFunctionModal(!createFunctionModal)  
    }

    return (
   
        <Modal isOpen={createFunctionModal} toggle={() => setCreateFunctionModal(!createFunctionModal)} className='modal-dialog-centered modal-md'>
            <ModalHeader toggle={() => setCreateFunctionModal(!createFunctionModal)}>Create Function</ModalHeader>
            <ModalBody>
                <Formik 
                    initialValues={{
                        openFaasId:id,
                        functionName:'',
                        identifier: '',
                        runtimeId:'',
                        codeFuntion:'',
                        userId:'1',
                        dependencies:''
                    }}
                    validationSchema={CreateFunctionSchema}
                    >
                    {({ errors, touched, handleChange, handleBlur, values, isValid, handleReset}) => (
                        <Form autoComplete="off" onSubmit={(e) => customSubmit(e, values, handleReset)}>
                            <h1>{isValid}</h1>
                        <FormGroup tag={Col} md='12'>
                                <Label className='form-label' for="functionName">
                                Function Name
                                </Label>
                                <Input
                                    name="functionName"
                                    id="functionName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.functionName}
                                    tag={Field}
                                    invalid={errors.functionName && touched.functionName}
                                />
                             {errors.functionName && touched.functionName && <FormFeedback>{errors.functionName}</FormFeedback>  }
                            </FormGroup>
                            <FormGroup tag={Col} md='12'>
                                <Label className='form-label' for="runtime">
                                Runtime
                                </Label>
                                <Input 
                                    name="runtimeId"
                                    type="select"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.runtimeId}
                                    invalid={errors.runtimeId && touched.runtimeId}
                                >
                                    <option value=""></option>
                                    {runtime.map(runtime => (
                                        <option key={runtime.id} value={runtime.id}>{runtime.name}</option>
                                    ))
                                    }
                                </Input>
                             {errors.runtime && touched.runtime && <FormFeedback>{errors.runtime}</FormFeedback>  }
                            </FormGroup>
                            <FormGroup tag={Col} md='12'>
                                <Label className='form-label' for="name">
                                Dependecies
                                </Label>
                                <InputTag name={'dependecies'} dependencies={dependencies} setDependencies={setDependencies}/>
                            </FormGroup>
                            <FormGroup tag={Col} md='12' className="mt-2">
                            <Button.Ripple color='primary' type="submit" disabled={!isValid}>Add</Button.Ripple>
                            </FormGroup>
                        </Form>
                    )}
                </Formik>
            </ModalBody>
        </Modal>

    )
}
