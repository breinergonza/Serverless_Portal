import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const SweetAl = (title, text, icon) => {
  return MySwal.fire({
    title: `${title}`,
    text: `${text}`,
    icon: `${icon}`,
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  })
}
