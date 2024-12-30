import React, { useState } from 'react';
import { MapPin, Calendar, Clock, CheckSquare, Plus } from 'lucide-react';
import type { Task } from '../types';

export function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      description: 'Confirmar transporte',
      priority: 'high',
      completed: false
    }
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    
    const task: Task = {
      id: Date.now().toString(),
      description: newTask,
      priority: 'medium',
      completed: false
    };
    
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Current Location */}
      <section className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="mr-2" size={20} />
          <h2 className="text-lg font-semibold">Ubicación Actual</h2>
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-1">Teatro Solís</h3>
        <p className="text-gray-600">Montevideo, Uruguay</p>
        <p className="text-gray-500">Hora local: 14:30</p>
      </section>

      {/* Next Show */}
      <section className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
        <div className="flex items-center text-gray-600 mb-4">
          <Calendar className="mr-2" size={20} />
          <h2 className="text-lg font-semibold">Próximo Show</h2>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg md:text-xl font-semibold">15 de Enero, 2025</h3>
          <p className="text-gray-600">Teatro Solís - Montevideo</p>
          <div className="flex items-center text-gray-500">
            <Clock size={16} className="mr-2" />
            <span>Prueba de sonido: 16:00</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Clock size={16} className="mr-2" />
            <span>Show: 21:00</span>
          </div>
        </div>
      </section>

      {/* Tasks */}
      <section className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
        <div className="flex items-center text-gray-600 mb-4">
          <CheckSquare className="mr-2" size={20} />
          <h2 className="text-lg font-semibold">Tareas Pendientes</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Nueva tarea..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addTask}
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus size={20} />
            </button>
          </div>

          <div className="space-y-2">
            {tasks.map(task => (
              <div
                key={task.id}
                className="flex items-center p-3 bg-gray-50 rounded-lg"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="mr-3 h-5 w-5 text-blue-600"
                />
                <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>
                  {task.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}