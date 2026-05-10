import { Link, useNavigate } from 'react-router-dom';
import LogoImg from '../assets/LogoEletroRota.png';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar({ usuario, setUsuario }) {
  const navigate = useNavigate();
  const [busca, setBusca] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    setUsuario(null);
    navigate('/home', { replace: true });
  };

  const handleBusca = (e) => {
    e.preventDefault();
    if (busca.trim()) navigate(`/busca?q=${busca}`);
  };

  return (
    <header className="bb-header">
      <div className="bb-topbar"> 
       {/* LADO ESQUERDO: Logo e Links */}
        <div className="bb-logo-area">
          <img src={LogoImg} alt="Logo BB EletroRota" className="bb-logo-img" /> 
      
          <span className="bb-logo-text">BB</span>
          <span className="bb-logo-yellow">
            EletroRota
          </span>
        </div>
 
        <nav className="bb-topnav">
          <Link to="/">Início</Link>
          <Link to="/gerenciar">Gerenciar Usuários</Link>
          <Link to="/mapas">Mapas</Link>
        </nav>
        

        {/* LADO DIREITO: Busca e Login/Logout */}
        <div className="bb-topbar-right">
          <form className="bb-search-form" onSubmit={handleBusca}>
            <div className="bb-search-icon-wrapper">
              <i className="fas fa-search"></i>
            </div>
            <input 
              type="text" 
              className="bb-search-input"
              placeholder="Busque no site" 
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </form>

          {usuario ? (
            /* L O G A D O */
            <div className="bb-user-logged">
              <h3 className="bb-user-name">
                Olá, <strong>{usuario?.nome.split(' ')[0]}</strong>
              </h3>
              <button className="bb-logout-btn" onClick={handleLogout}>
                Sair
              </button>
            </div>
          ) : (
            /* D E S L O G A DO */
            <Link to="/login" className="bb-account-btn">
              <i className="fas fa-user icone-user"></i>
              <span>Acessar a sua conta</span>
            </Link>
          )}
        </div>

      </div>
    </header>
  );
}
