import { signInWithEmailAndPassword } from 'firebase/auth';

const handleLogin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    const token = await userCredential.user.getIdToken();
    const userData = {
      email: userCredential.user.email,
      uid: userCredential.user.uid,
      role: 'admin', // Firebase'den dinamik olarak çekilebilir
    };

    localStorage.setItem('accessToken', token);
    localStorage.setItem('userData', JSON.stringify(userData));

    ability.update([
      { action: 'manage', subject: 'all' }, // CASL güncellemesi
    ]);

    router.replace('/dashboards-crm');
  } catch (error) {
    console.error('Giriş işlemi sırasında hata:', error);
    alert('Giriş başarısız! Lütfen bilgilerinizi kontrol edin.');
  }
};
