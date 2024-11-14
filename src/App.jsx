import React, { useState } from 'react'
import './index.css'
import image from './images/MONITOREO.PNG'

function App() {
  const [activeTab, setActiveTab] = useState("procedure")
  const [activeFormTab, setActiveFormTab] = useState("solicitud")
  const [activeAccordionItem, setActiveAccordionItem] = useState("")
  const [formData, setFormData] = useState({
    fechaSolicitud: "",
    solicitante: "",
    descripcionCambio: "",
    impactoEsperado: "bajo",
    fechaAnalisis: "",
    analistaTI: "",
    descripcionCambioImpacto: "",
    impactoSeguridad: "",
    impactoFuncionalidad: "",
    impactoRecursos: "",
    recomendacion: "",
    fechaValidacion: "",
    nombreValidador: "",
    resultadoPruebas: "",
    observaciones: "",
    planReversion: "no",
    fechaRevision: "",
    resultadoRevision: "",
    comentariosComite: "",
    aprobacionAdicional: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const toggleAccordionItem = (itemValue) => {
    setActiveAccordionItem(prevState => prevState === itemValue ? "" : itemValue)
  }

  const handleSubmit = (formType) => {
    alert(`Formulario de ${formType} enviado con éxito`)
    setFormData({
      ...formData,
      [formType === 'solicitud' ? 'fechaSolicitud' : formType === 'impacto' ? 'fechaAnalisis' : formType === 'validacion' ? 'fechaValidacion' : 'fechaRevision']: "",
      [formType === 'solicitud' ? 'solicitante' : formType === 'impacto' ? 'analistaTI' : formType === 'validacion' ? 'nombreValidador' : 'resultadoRevision']: "",
      [formType === 'solicitud' ? 'descripcionCambio' : formType === 'impacto' ? 'descripcionCambioImpacto' : formType === 'validacion' ? 'resultadoPruebas' : 'comentariosComite']: "",
      [formType === 'solicitud' ? 'impactoEsperado' : formType === 'impacto' ? 'impactoSeguridad' : formType === 'validacion' ? 'observaciones' : 'aprobacionAdicional']: formType === 'solicitud' ? "bajo" : formType === 'revision' ? false : "",
    })
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Procedimiento de Control de Cambios para SIC</h1>
      <h2 className="text-xl mb-4">Coca-Cola Nicaragua</h2>

      <div className="bg-white shadow rounded-lg mb-4">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Información del Documento</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Documento</label>
              <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value="SIC-CC-001" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Código</label>
              <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value="SIC-2023" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Versión</label>
              <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value="1.0" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Fecha de Emisión</label>
              <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value="2024-11-14" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Revisión</label>
              <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value="Anual" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Responsable</label>
              <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value="Departamento de TI" readOnly />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex border-b">
          {["procedure", "forms", "flowchart"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "procedure" ? "Procedimiento" : tab === "forms" ? "Formularios" : "Diagrama de Flujo"}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "procedure" && (
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Procedimiento de Control de Cambios</h3>
          <div className="space-y-2">
            {[
              { value: "item-1", title: "1. Objetivo" },
              { value: "item-2", title: "2. Alcance" },
              { value: "item-3", title: "3. Definiciones y Clasificación de Cambios" },
              { value: "item-4", title: "4. Responsabilidades" },
              { value: "item-5", title: "5. Procedimiento Detallado" },
              { value: "item-6", title: "6. Monitoreo y Seguimiento" }
            ].map((item) => (
              <div key={item.value} className="border rounded-md">
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => toggleAccordionItem(item.value)}
                >
                  <span>{item.title}</span>
                  <span>{activeAccordionItem === item.value ? '▲' : '▼'}</span>
                </button>
                {activeAccordionItem === item.value && (
                  <div className="p-4 border-t">
                    {item.value === "item-1" && (
                      <p>
                        Establecer un proceso estandarizado para la identificación, evaluación, aprobación,
                        implementación y monitoreo de los cambios en los Sistemas de Información Computarizados (SIC)
                        de Coca-Cola Nicaragua, garantizando la integridad, seguridad y eficiencia de los sistemas.
                      </p>
                    )}
                    {item.value === "item-2" && (
                      <>
                        <p>Este procedimiento aplica a todos los cambios que afecten los Sistemas de Información
                        Computarizados de Coca-Cola Nicaragua, incluyendo:</p>
                        <ul className="list-disc list-inside mt-2">
                          <li>Software de aplicación</li>
                          <li>Sistemas operativos</li>
                          <li>Bases de datos</li>
                          <li>Infraestructura de red</li>
                          <li>Políticas de seguridad informática</li>
                          <li>Hardware crítico para el funcionamiento de los sistemas</li>
                        </ul>
                      </>
                    )}
                    {item.value === "item-3" && (
                      <>
                        <h4 className="font-semibold mt-2">3.1 Tipos de Cambios</h4>
                        <ul className="list-disc list-inside mb-2">
                          <li>Cambio de Emergencia: Modificaciones urgentes para resolver problemas críticos del sistema.</li>
                          <li>Cambio Planificado: Actualizaciones o mejoras programadas del sistema.</li>
                          <li>Cambio de Rutina: Modificaciones menores que no afectan significativamente la funcionalidad.</li>
                        </ul>
                        <h4 className="font-semibold mt-2">3.2 Clasificación por Impacto</h4>
                        <p>Cada cambio se clasifica según su impacto en:</p>
                        <ul className="list-disc list-inside mt-2">
                          <li>Tiempo de implementación</li>
                          <li>Recursos necesarios</li>
                          <li>Seguridad del sistema</li>
                          <li>Funcionalidad del sistema</li>
                        </ul>
                        <p className="mt-2">Y se categoriza como: Bajo impacto, Impacto moderado, o Alto impacto.</p>
                      </>
                    )}
                    {item.value === "item-4" && (
                      <ul className="list-disc list-inside">
                        <li>Solicitante del Cambio: Usuario o departamento que identifica la necesidad de cambio.</li>
                        <li>Comité de Control de Cambios de TI (CCCTI): Revisa, aprueba y supervisa los cambios significativos.</li>
                        <li>Equipo de Desarrollo de TI: Implementa los cambios aprobados.</li>
                        <li>Equipo de Seguridad Informática: Verifica el cumplimiento de las políticas de seguridad.</li>
                        <li>Gerencia de TI: Aprueba los cambios de alto impacto y asigna recursos.</li>
                      </ul>
                    )}
                    {item.value === "item-5" && (
                      <ol className="list-decimal list-inside space-y-4">
                        <li>
                          <strong>Identificación y Solicitud del Cambio</strong>
                          <ul className="list-disc list-inside ml-4 mt-2">
                            <li>El solicitante identifica la necesidad de un cambio en el sistema.</li>
                            <li>Completa el Formulario de Solicitud de Cambio en SIC (Anexo I).</li>
                            <li>Envía la solicitud al Comité de Control de Cambios de TI.</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Evaluación de Impacto</strong>
                          <ul className="list-disc list-inside ml-4 mt-2">
                            <li>El equipo de TI realiza un análisis detallado del cambio propuesto.</li>
                            <li>Evalúa el impacto en funcionalidad, seguridad, rendimiento y sistemas interconectados.</li>
                            <li>Genera un Informe de Análisis de Impacto en SIC (Anexo II).</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Revisión y Aprobación</strong>
                          <ul className="list-disc list-inside ml-4 mt-2">
                            <li>El CCCTI revisa el Informe de Análisis de Impacto.</li>
                            <li>Decide si aprueba, rechaza o solicita modificaciones al cambio propuesto.</li>
                            <li>Para cambios de alto impacto, se requiere la aprobación adicional de la Gerencia de TI.</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Planificación del Cambio</strong>
                          <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Se crea un Plan de Implementación detallado.</li>
                            <li>Se incluye cronograma, recursos necesarios, responsables y plan de reversión.</li>
                            <li>Se establecen medidas de seguridad y estrategia de comunicación.</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Implementación del Cambio</strong>
                          <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Se crea un entorno de pruebas que replica el sistema en producción.</li>
                            <li>Se implementa el cambio en el entorno de pruebas.</li>
                            <li>Se realizan pruebas exhaustivas (unitarias, de integración, de seguridad, de rendimiento).</li>
                            <li>Se documenta cada paso de la implementación y los resultados de las pruebas.</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Revisión y Validación</strong>
                          <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Se realiza una revisión post-implementación.</li>
                            <li>Se verifica que se hayan cumplido los objetivos del cambio.</li>
                            <li>Se completa el Informe de Validación de Cambios en SIC (Anexo III).</li>
                            <li>Si se detectan problemas, se activa el plan de reversión si es necesario.</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Documentación y Archivo</strong>
                          <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Se actualiza toda la documentación del sistema afectada por el cambio.</li>
                            <li>Se archiva la documentación en el sistema de gestión de configuración de TI.</li>
                          </ul>
                        </li>
                      </ol>
                    )}
                    {item.value === "item-6" && (
                      <ul className="list-disc list-inside">
                        <li>Se establece un período de monitoreo post-implementación.</li>
                        <li>Se realiza un seguimiento del rendimiento del sistema después del cambio.</li>
                        <li>Se generan informes periódicos sobre el impacto y la eficiencia del cambio.</li>
                        <li>Se documentan las lecciones aprendidas para futuros cambios.</li>
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "forms" && (
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Formularios de Control de Cambios</h3>
          <div className="mb-4">
            <div className="flex border-b">
              {["solicitud", "impacto", "revision", "validacion"].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 ${activeFormTab === tab ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
                  onClick={() => setActiveFormTab(tab)}
                >
                  {tab === "solicitud" ? "Solicitud de Cambio" : 
                   tab === "impacto" ? "Análisis de Impacto" : 
                   tab === "revision" ? "Revisión y Aprobación" :
                   "Validación de Cambios"}
                </button>
              ))}
            </div>
          </div>
          {activeFormTab === "solicitud" && (
            <div>
              <h4 className="text-lg font-semibold mb-4">Formulario de Solicitud de Cambio en SIC</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="fechaSolicitud">Fecha de Solicitud</label>
                  <input
                    type="date"
                    id="fechaSolicitud"
                    name="fechaSolicitud"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={formData.fechaSolicitud}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="solicitante">Solicitante</label>
                  <input
                    id="solicitante"
                    name="solicitante"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={formData.solicitante}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="descripcionCambio">Descripción del Cambio</label>
                  <textarea
                    id="descripcionCambio"
                    name="descripcionCambio"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={formData.descripcionCambio}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Impacto Esperado</label>
                  <div className="mt-2 space-y-2">
                    {["bajo", "moderado", "alto"].map((impact) => (
                      <div key={impact} className="flex items-center">
                        <input
                          id={impact}
                          name="impactoEsperado"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          checked={formData.impactoEsperado === impact}
                          onChange={() => setFormData({...formData, impactoEsperado: impact})}
                        />
                        <label htmlFor={impact} className="ml-3 block text-sm font-medium text-gray-700">
                          {impact.charAt(0).toUpperCase() + impact.slice(1)}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleSubmit('solicitud')}
                >
                  Enviar Solicitud
                </button>
              </div>
            </div>
          )}
          {activeFormTab === "impacto" && (
            <div>
              <h4 className="text-lg font-semibold mb-4">Informe de Análisis de Impacto en SIC</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="fechaAnalisis">Fecha</label>
                  <input
                    type="date"
                    id="fechaAnalisis"
                    name="fechaAnalisis"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={formData.fechaAnalisis}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="analistaTI">Analista de TI</label>
                  <input
                    id="analistaTI"
                    name="analistaTI"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={formData.analistaTI}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="descripcionCambioImpacto">Descripción del Cambio</label>
                  <textarea
                    id="descripcionCambioImpacto"
                    name="descripcionCambioImpacto"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={formData.descripcionCambioImpacto}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="impactoSeguridad">Impacto en Seguridad</label>
                  <select
                    id="impactoSeguridad"
                    name="impactoSeguridad"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={formData.impactoSeguridad}
                    onChange={handleInputChange}
                  >
                    <option value="">Seleccione el impacto</option>
                    <option value="bajo">Bajo</option>
                    <option value="medio">Medio</option>
                    <option value="alto">Alto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="impactoFuncionalidad">Impacto en Funcionalidad</label>
                  <select
                    id="impactoFuncionalidad"
                    name="impactoFuncionalidad"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={formData.impactoFuncionalidad}
                    onChange={handleInputChange}
                  >
                    <option value="">Seleccione el impacto</option>
                    <option value="bajo">Bajo</option>
                    <option value="medio">Medio</option>
                    <option value="alto">Alto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="impactoRecursos">Impacto en Recursos</label>
                  <select
                    id="impactoRecursos"
                    name="impactoRecursos"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={formData.impactoRecursos}
                    onChange={handleInputChange}
                  >
                    <option value="">Seleccione el impacto</option>
                    <option value="bajo">Bajo</option>
                    <option value="medio">Medio</option>
                    <option value="alto">Alto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="recomendacion">Recomendación</label>
                  <textarea
                    id="recomendacion"
                    name="recomendacion"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={formData.recomendacion}
                    onChange={handleInputChange}
                  />
                </div>
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleSubmit('impacto')}
                >
                  Enviar Análisis
                </button>
              </div>
            </div>
          )}
          {activeFormTab === "revision" && (
            <div>
              <h4 className="text-lg font-semibold mb-4">Formulario de Revisión y Aprobación</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="fechaRevision">Fecha de revisión</label>
                  <input
                    type="date"
                    id="fechaRevision"
                    name="fechaRevision"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={formData.fechaRevision}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Comité de Control de Cambios de TI (CCCTI):</label>
                  <div className="mt-2 space-y-2">
                    {["Aprobado", "Rechazado", "Aprobado con modificaciones"].map((result) => (
                      <div key={result} className="flex items-center">
                        <input
                          id={result}
                          name="resultadoRevision"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          checked={formData.resultadoRevision === result}
                          onChange={() => setFormData({...formData, resultadoRevision: result})}
                        />
                        <label htmlFor={result} className="ml-3 block text-sm font-medium text-gray-700">
                          {result}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="comentariosComite">Comentarios del comité</label>
                  <textarea
                    id="comentariosComite"
                    name="comentariosComite"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={formData.comentariosComite}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="aprobacionAdicional"
                      checked={formData.aprobacionAdicional}
                      onChange={handleInputChange}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <span className="ml-2 block text-sm font-medium text-gray-700">
                      Aprobación adicional (Sí, aprobado por Gerencia de TI)
                    </span>
                  </label>
                </div>
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleSubmit('revision')}
                >
                  Enviar Revisión
                </button>
              </div>
            </div>
          )}
          {activeFormTab === "validacion" && (
            <div>
              <h4 className="text-lg font-semibold mb-4">Informe de Validación de Cambios en SIC</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="fechaValidacion">Fecha de Validación</label>
                  <input
                    type="date"
                    id="fechaValidacion"
                    name="fechaValidacion"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={formData.fechaValidacion}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="nombreValidador">Nombre del Validador</label>
                  <input
                    id="nombreValidador"
                    name="nombreValidador"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={formData.nombreValidador}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="resultadoPruebas">Resultado de Pruebas</label>
                  <textarea
                    id="resultadoPruebas"
                    name="resultadoPruebas"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={formData.resultadoPruebas}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="observaciones">Observaciones</label>
                  <textarea
                    id="observaciones"
                    name="observaciones"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={formData.observaciones}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Plan de Reversión Activado</label>
                  <div className="mt-2 space-y-2">
                    {["si", "no"].map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          id={option}
                          name="planReversion"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          checked={formData.planReversion === option}
                          onChange={() => setFormData({...formData, planReversion: option})}
                        />
                        <label htmlFor={option} className="ml-3 block text-sm font-medium text-gray-700">
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleSubmit('validacion')}
                >
                  Enviar Validación
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === "flowchart" && (
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Diagrama de Flujo del Proceso</h3>
          <p className="text-gray-600 mb-4">Proceso de Control de Cambios en SIC</p>
          <div className="flex justify-center">
            <img
              src={image} alt="Descripción de la imagen" className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App