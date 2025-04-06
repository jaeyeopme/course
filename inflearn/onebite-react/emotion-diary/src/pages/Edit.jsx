import { useParams } from 'react-router-dom'

const Edit = () => {
  const params = useParams()
  console.log(params.id)

  return <div>Edit</div>
}

export default Edit
