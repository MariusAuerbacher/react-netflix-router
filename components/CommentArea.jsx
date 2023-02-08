import { useState, useEffect } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea =(props)=> {

  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const getComments= async () => {
    if (props.asin) {
      setIsLoading(true)
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' +
           props.asin,
          {
            headers: {
              Authorization:  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzA5OWU3MzczODAwMTUzNzQzNzIiLCJpYXQiOjE2NzUzNDE2MjYsImV4cCI6MTY3NjU1MTIyNn0.bPwPGuwUuH1beV7mOeR0Y1s_UlFQnOtBnktkiW1JB5I",
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let comments = await response.json()
          setComments(comments)
          setIsLoading(false)
          setIsError(false)
        } else {
          console.log('error')
          setIsLoading(false)
          setIsError(true)
        }
      } catch (error) {
        console.log(error)
        setIsLoading(false)
        setIsError(true)
      }
    }
  }
  useEffect(() => {
    getComments()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin])


    return (
      <div className="text-center">
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment asin={props.asin} />
        <CommentList commentsToShow={comments} />
      </div>
    )
  
}

export default CommentArea
