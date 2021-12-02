import { Field } from 'formik'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Tags = styled.div`
  display: flex;
  align-items: center;
  margin: 7px 0px 0px 7px;
  padding: 0 10px;
  padding-right: 5px;
  border-radius: 5px;
  white-space: nowrap;
  background-color: rgba(115,103,240,.12);
  font-size: 12px;
  color: #7367f0!important;
`
const Wrapper = styled.div`
  min-height: 37px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  border-radius: 5px;
  border: 1px solid #404656;
  color: black;
`

const CustomInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  min-width: 50% !important;
  border: none;
  border-radius: 5px;
  padding-top: 7px;
  padding-left: 14px;
  color: #b4b7bd;
  &:focus{
    border: none;
      outline: none;
  }
  &:active{
      border: none;
      outline: none;
  }
`

const TagBtn = styled.button`
  display: flex;
  padding: 6px;
  border: none;
  background-color: unset;
  cursor: pointer;
  color: grey;
  outline: none;
    &:focus{
    border: none;
    outline: none;
  }


`

export const InputTag = ({name, dependencies, setDependencies}) => {
  
  const [input, setInput] = useState('')
  const [tags, setTags] = useState([])
  const [isKeyReleased, setIsKeyReleased] = useState(false)

  const onChange = (e) => {
    const { value } = e.target
    setInput(value)
  }

  useEffect(() => {
    setDependencies(tags)
  }, [tags])

  const onKeyDown = (e) => {
     
    const { key } = e
    const trimmedInput = input.trim()
    
    if (key === 'Enter' && trimmedInput.length) {
        e.preventDefault()
        setTags(prevState => [...prevState, trimmedInput])
        
        setInput('')
    } 
    
    setIsKeyReleased(false)
   
  }
  
  const onKeyUp = () => {
    setIsKeyReleased(true)    
  }

  const deleteTag = (index) => {
    setTags(prevState => prevState.filter((tag, i) => i !== index))
  }
    return (
        <>
        <Wrapper >
        <div style={{display:"flex", flexWrap:'wrap'}}>
        {tags.map((tag, index) => (
          <Tags key={index}>
            {tag}
            <TagBtn onClick={() => deleteTag(index)}>x</TagBtn>
          </Tags>
        ))}
        </div>
        <CustomInput
          name={name}
          value={input}
          placeholder="Enter a dependencie"
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onChange={onChange}
          tag={Field}
        />
        </Wrapper>
        </>
    )
}
