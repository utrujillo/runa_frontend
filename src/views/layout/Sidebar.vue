<template lang="pug">
.card
  .card-header Menu Principal
  .card-body.p-0
    ul.list-group.list-group-flush
      .list-group-item 
        router-link.card-item(to="/companies") Compañias
      .list-group-item
        a.card-link(href="/") Departamentos
      .list-group-item
        a.card-link(href="/") Horario
      .list-group-item
        a.card-link(href="/") Registro Entrada/Salida
      .list-group-item
        a.card-link(href="/") Reporte Entrada/Salida
</template>
