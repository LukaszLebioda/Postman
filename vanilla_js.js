function hireEmployee(name, surname, email, age, profession) {
  if (name.length < 3) return null;
  if (surname.length < 3) return null;
  if (email.length < 3) return null;
  if (age < 18) return null;
  if (profession.length < 3) return null;

  if (
    profession != "programmer" &&
    profession != "admin" &&
    profession != "manager"
  )
    return null;

  return (obj = {
    company: "Example Ltd.",
    name: name,
    surname: surname,
    email: email,
    age: age,
    profession: profession,
  });
}

const employee1 = hireEmployee("Kasia", "Basia", "ddsf@sdfd.com", 42, "admin");
console.log(employee1);
