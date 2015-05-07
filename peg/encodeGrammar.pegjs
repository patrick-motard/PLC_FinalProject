words = word+
word  = w:char+ ws* { return w.join(""); }
char  = c:[^ \r\n\t] { return c; }
ws    = [ \t]