import photo from "../assets/photo.jpg";

function Header() {
  return (
    <header className="header">
      <img src={photo} alt="Андрій Ковач" className="avatar" />

      <div>
        <h1>Андрій Ковач</h1>
        <p>Студент</p>

        <address>
          <p>Email: kovach.andrew@icloud.com</p>
          <p>Телефон: +38 (099) 017-32-74</p>
          <p>Telegram: @Andrew_Kovach</p>
          <p>Місто: Львів, Україна</p>
        </address>
      </div>
    </header>
  );
}

export default Header;