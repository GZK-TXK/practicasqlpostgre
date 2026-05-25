const queriesService={
    create: `INSERT INTO servicios(servicios, descripcion,precio)
VALUES ('Restauracion', 'Te dan de comer si pagas,y si no a fregar', 220),
('Catering', 'Una forma pija de decir picoteo', 18001),
('Cena Maridaje', 'Te va a salir cara la tarta', 240000),
('Taller de Cocina', 'De precocinados no se puede vivir', 45860)`,
    delete: 'DELETE FROM servicios WHERE id_servicios= $1'

}

