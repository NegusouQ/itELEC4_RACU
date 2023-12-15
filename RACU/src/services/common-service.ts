import avatar1 from '../assets/images/18.png'
import avatar2 from '../assets/images/19.png'
import avatar3 from '../assets/images/20.png'
import avatar4 from '../assets/images/21.png'
import avatar5 from '../assets/images/23.png'

export const getAvatar = (id: number) => id == 1 ? avatar1 : id == 2 ? avatar2 : id == 3 ? avatar3 : id == 4 ? avatar4 : avatar5
