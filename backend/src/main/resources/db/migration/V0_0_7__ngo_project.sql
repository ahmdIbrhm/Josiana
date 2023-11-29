CREATE TABLE IF NOT EXISTS work_on (
    accepted boolean,
    ngo_id int,
    project_id int,
    architect varchar(100),
    civil_engineer varchar(100),
    contractor varchar(100),
    number_of_subcontractors int,
    progress int,
    CONSTRAINT fk_ngo FOREIGN KEY(ngo_id) REFERENCES users(id),
    CONSTRAINT fk_project FOREIGN KEY(project_id) REFERENCES projects(id)
);