import { object, string, number, date, InferType, ref } from 'yup';

let validations = object({
    firstName: string().required('Zorunlu alan!'),
    lastName: string().required('Zorunlu alan!'),
    email: string().email('Geçerli bir email giriniz!').required('Zorunlu alan!'),
    password: string().min(5, 'En az 5 karakter olmalıdır!').required('Zorunlu alan!'),
    confirmPassword: string().oneOf([ref("password"),"Parolar uyuşmuyor!"]).required('Zorunlu alan!')

  });
 
  
export default validations;