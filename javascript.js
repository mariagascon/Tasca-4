function AlumnosController($scope) {
    $scope.alumnos=[
        {dni:" ", nombre=" ", apellidos=" ", correo=" ", nota=" "}
    ];

$scope.Save=function(){
    $scope.alumnos.push({dni:$scope.nuevoAlumno.dni, nombre:$scope.nuevoAlumno.nombre, apellidos:$scope.nuevoAlumno.apellidos, correo:$scope.nuevoAlumno.correo, nota:$scope.nuevoAlumno.nota});
}  
}