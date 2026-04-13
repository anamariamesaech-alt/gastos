import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CATEGORIAS = ['Comida', 'Transporte', 'Servicios', 'Salud', 'Educación', 'Entretenimiento', 'Otros'];

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const hoy = new Date();
  const [mesAnio, setMesAnio] = useState(`${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}`);
  const [gastos, setGastos] = useState([]);
  const [form, setForm] = useState({ fecha: '', categoria: '', valor: '', descripcion: '' });
  const [errores, setErrores] = useState({});
  const [editandoId, setEditandoId] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/auth/iniciar');
  };

  const validar = () => {
    const e = {};
    if (!form.fecha) e.fecha = 'La fecha es obligatoria';
    if (!form.categoria) e.categoria = 'Selecciona una categoría';
    if (!form.valor) e.valor = 'El valor es obligatorio';
    if (!form.descripcion) e.descripcion = 'La descripción es obligatoria';
    setErrores(e);
    return Object.keys(e).length === 0;
  };

  const handleGuardar = () => {
    if (!validar()) return;

    if (editandoId) {
      setGastos(gastos.map(g => g.id === editandoId ? { ...form, id: editandoId } : g));
      setEditandoId(null);
    } else {
      setGastos([...gastos, { ...form, id: Date.now() }]);
    }

    setForm({ fecha: '', categoria: '', valor: '', descripcion: '' });
    setErrores({});
  };

  const handleEditar = (gasto) => {
    setForm({ fecha: gasto.fecha, categoria: gasto.categoria, valor: gasto.valor, descripcion: gasto.descripcion });
    setEditandoId(gasto.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelarEdicion = () => {
    setForm({ fecha: '', categoria: '', valor: '', descripcion: '' });
    setEditandoId(null);
    setErrores({});
  };

  const handleEliminar = (id) => {
    setGastos(gastos.filter(g => g.id !== id));
  };

  const gastosFiltrados = gastos.filter(g => g.fecha.startsWith(mesAnio));
  const totalGeneral = gastosFiltrados.reduce((acc, g) => acc + Number(g.valor), 0);

  const gastosPorCategoria = CATEGORIAS.map(c => ({
    categoria: c,
    total: gastosFiltrados.filter(g => g.categoria === c).reduce((acc, g) => acc + Number(g.valor), 0)
  })).filter(c => c.total > 0);

  return (
    <div style={{ backgroundColor: '#f5f7fa', minHeight: '100vh', padding: '2rem', paddingTop: '80px' }}>

      {/* HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1a1a2e' }}>Gastos Diarios</h1>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>Control de gastos por periodo · Totales · Saldos · Liquidación</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: '#fff', padding: '0.5rem 1rem', borderRadius: '10px', border: '1px solid #e0e0e0' }}>
            <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '2px' }}>Mes/Año</p>
            <input
              type="month"
              value={mesAnio}
              onChange={e => setMesAnio(e.target.value)}
              style={{ border: 'none', outline: 'none', fontSize: '0.95rem', fontWeight: 600 }}
            />
          </div>
          <button
            onClick={handleLogout}
            style={{ background: '#1565C0', color: '#fff', border: 'none', borderRadius: '8px', padding: '0.5rem 1rem', cursor: 'pointer', fontWeight: 600 }}
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '1.5rem' }}>

        {/* COLUMNA IZQUIERDA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* FORMULARIO */}
          <div style={{ background: '#fff', borderRadius: '16px', padding: '1.5rem', border: `1px solid ${editandoId ? '#1565C0' : '#e0e0e0'}` }}>
            <h2 style={{ fontWeight: 700, marginBottom: '1rem', color: '#1a1a2e' }}>
              {editandoId ? '✏️ Editando gasto' : 'Registrar gasto'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: '#555', fontWeight: 600 }}>Fecha</label>
                <input
                  type="date"
                  value={form.fecha}
                  onChange={e => setForm({ ...form, fecha: e.target.value })}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '8px', marginTop: '4px' }}
                />
                {errores.fecha && <p style={{ color: 'red', fontSize: '0.75rem' }}>{errores.fecha}</p>}
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: '#555', fontWeight: 600 }}>Categoría</label>
                <select
                  value={form.categoria}
                  onChange={e => setForm({ ...form, categoria: e.target.value })}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '8px', marginTop: '4px' }}
                >
                  <option value="">Seleccione...</option>
                  {CATEGORIAS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                {errores.categoria && <p style={{ color: 'red', fontSize: '0.75rem' }}>{errores.categoria}</p>}
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: '#555', fontWeight: 600 }}>Valor</label>
                <input
                  type="number"
                  value={form.valor}
                  onChange={e => setForm({ ...form, valor: e.target.value })}
                  placeholder="Ej: 45000"
                  style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '8px', marginTop: '4px' }}
                />
                {errores.valor && <p style={{ color: 'red', fontSize: '0.75rem' }}>{errores.valor}</p>}
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '0.8rem', color: '#555', fontWeight: 600 }}>Descripción</label>
              <input
                type="text"
                value={form.descripcion}
                onChange={e => setForm({ ...form, descripcion: e.target.value })}
                placeholder="Detalle"
                style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '8px', marginTop: '4px' }}
              />
              {errores.descripcion && <p style={{ color: 'red', fontSize: '0.75rem' }}>{errores.descripcion}</p>}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={handleGuardar}
                style={{ background: editandoId ? '#1565C0' : '#2e7d32', color: '#fff', border: 'none', borderRadius: '8px', padding: '0.6rem 1.2rem', cursor: 'pointer', fontWeight: 700 }}
              >
                {editandoId ? 'Actualizar' : 'Guardar'}
              </button>
              {editandoId && (
                <button
                  onClick={handleCancelarEdicion}
                  style={{ background: '#f5f5f5', color: '#555', border: '1px solid #ddd', borderRadius: '8px', padding: '0.6rem 1.2rem', cursor: 'pointer', fontWeight: 600 }}
                >
                  Cancelar
                </button>
              )}
            </div>
          </div>

          {/* TABLA */}
          <div style={{ background: '#fff', borderRadius: '16px', padding: '1.5rem', border: '1px solid #e0e0e0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h2 style={{ fontWeight: 700, color: '#1a1a2e' }}>Gastos del periodo</h2>
              <span style={{ color: '#888', fontSize: '0.85rem' }}>{mesAnio}</span>
            </div>

            {gastosFiltrados.length === 0 ? (
              <p style={{ color: '#aaa', padding: '2rem', textAlign: 'center' }}>No hay gastos en este periodo</p>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #eee' }}>
                    <th style={{ padding: '8px', textAlign: 'left', color: '#555' }}>Fecha</th>
                    <th style={{ padding: '8px', textAlign: 'left', color: '#555' }}>Categoría</th>
                    <th style={{ padding: '8px', textAlign: 'left', color: '#555' }}>Valor</th>
                    <th style={{ padding: '8px', textAlign: 'left', color: '#555' }}>Descripción</th>
                    <th style={{ padding: '8px', textAlign: 'left', color: '#555' }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {gastosFiltrados.map(g => (
                    <tr key={g.id} style={{ borderBottom: '1px solid #f0f0f0', background: editandoId === g.id ? '#e3f2fd' : 'transparent' }}>
                      <td style={{ padding: '8px' }}>{g.fecha}</td>
                      <td style={{ padding: '8px' }}>{g.categoria}</td>
                      <td style={{ padding: '8px' }}>${Number(g.valor).toLocaleString()}</td>
                      <td style={{ padding: '8px' }}>{g.descripcion}</td>
                      <td style={{ padding: '8px', display: 'flex', gap: '6px' }}>
                        <button
                          onClick={() => handleEditar(g)}
                          style={{ background: '#e3f2fd', color: '#1565C0', border: 'none', borderRadius: '6px', padding: '4px 10px', cursor: 'pointer', fontWeight: 600 }}
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleEliminar(g.id)}
                          style={{ background: '#ffebee', color: '#c62828', border: 'none', borderRadius: '6px', padding: '4px 10px', cursor: 'pointer', fontWeight: 600 }}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* COLUMNA DERECHA - RESUMEN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '1.5rem', border: '1px solid #e0e0e0' }}>

            {/* PERFIL USUARIO */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#1565C0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <p style={{ fontWeight: 700, color: '#1a1a2e', margin: 0 }}>{user?.name}</p>
                <p style={{ fontSize: '0.8rem', color: '#888', margin: 0 }}>{user?.email}</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h2 style={{ fontWeight: 700, color: '#1a1a2e' }}>Resumen</h2>
              <span style={{ color: '#888', fontSize: '0.85rem' }}>{mesAnio}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: '#555' }}>Total gastado</span>
              <span style={{ fontWeight: 700, color: '#c62828' }}>${totalGeneral.toLocaleString()}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ color: '#555' }}>Total registros</span>
              <span style={{ fontWeight: 700 }}>{gastosFiltrados.length}</span>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: '1rem' }} />

            <h3 style={{ fontWeight: 700, color: '#1a1a2e', marginBottom: '1rem' }}>Por categoría</h3>

            {gastosPorCategoria.length === 0 ? (
              <p style={{ color: '#aaa', fontSize: '0.85rem', textAlign: 'center' }}>Sin gastos este periodo</p>
            ) : (
              gastosPorCategoria.map(c => (
                <div key={c.categoria} style={{ marginBottom: '0.75rem', padding: '0.75rem', background: '#f9f9f9', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{c.categoria}</span>
                    <span style={{ fontWeight: 700, color: '#1565C0' }}>${c.total.toLocaleString()}</span>
                  </div>
                  <div style={{ marginTop: '6px', background: '#e0e0e0', borderRadius: '99px', height: '4px' }}>
                    <div style={{ background: '#1565C0', borderRadius: '99px', height: '4px', width: `${Math.min((c.total / totalGeneral) * 100, 100)}%` }} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;