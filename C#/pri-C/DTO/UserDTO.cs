﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class UserDTO
    {
        public int Id { get; set; }
        public int Identity { get; set; }
        public int Password { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public int Phone { get; set; }

    }
}
