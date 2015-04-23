'use strict';

/**
 * @ngdoc service
 * @name appApp.crud
 * @description
 * # crud
 * Service in the appApp.
 */
angular.module('appApp')
  .factory('TareasResourse', function ($resource) {
  var factory = {

    iniciar: $resource('http://45.55.142.93:5000/login',{},{
      sesion: {method: 'POST', params:{
        username:'@username',
        password:'@password'}
      }
    }),
    getAlert: $resource('http://45.55.142.93:5000/getAlert',{},{
      all: {method: 'GET',isArray:true}
    }), 
    getPendientes: $resource('http://45.55.142.93:5000/getPendientes',{},{
      all: {method: 'GET',isArray:true}
    }),
    getTipos: $resource('http://45.55.142.93:5000/getTiposAlert',{},{
      all: {method: 'GET',isArray:true}
    }),
    getEstados: $resource('http://45.55.142.93:5000/getEstados',{},{
      all: {method: 'GET',isArray:true}
    }),
    addCliente: $resource('http://45.55.142.93:5000/addUser',{},{
      nuevoCliente: {method: 'POST', params:{
        nombres:'@nombres',
        apellidos:'@apellidos',
        username:'@username',
        password:'@password',
        telefono:'@telefono',
        direccion:'@direccion',
        cedula:'@cedula',
        idtipouser:'@idtipouser',
        email:'@email'

      }
      }
    }),
    membresia: $resource('http://45.55.142.93:5000/membresia',{},{
      add: {method: 'POST', params:{
        username:'@username',
        tiempo:'@tiempo'
      }
      }
    }),
    
    eliminarVehiculo: $resource('http://45.55.142.93:5000/eliminarVehiculo',{},{
      eliminar: {method: 'POST', params:{idvehiculo:'@idvehiculo'}
      }
    }),
    
    
    editar: $resource('http://45.55.142.93:5000/editUser',{},{
      cliente: {method: 'POST', params:{
        nombres:'@nombres',
        apellidos:'@apellidos',
        username:'@username',
        password:'@password',
        telefono:'@telefono',
        direccion:'@direccion',
        cedula:'@cedula',
        idtipouser:'@idtipouser',
        email:'@email'
      }
      }
    }),
     e: $resource('http://45.55.142.93:5000/editAlert',{},{
      a: {method: 'POST', params:{
        idalerta:'@idalerta',
        estado:'@estado',
        comentario:'@comentario'
      }
      }
    }),
     vehiculo: $resource('http://45.55.142.93:5000/newVehiculo',{},{
      add: {method: 'POST', params:{
        color: '@color',
        placa: '@placa',
        chasis: '@chasis',
        idusuario: '@idusuario',
        marca: '@marca',
        modelo: '@modelo',
        fecha: '@fecha'
      }
      }
    }),

  };
  return factory;

});
