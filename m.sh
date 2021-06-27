openssl req -x509 -out api.jugster.ir.crt -keyout api.jugster.ir.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=api.jugster.ir' -extensions EXT -config <( \
   printf "[dn]\nCN=api.jugster.ir\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:api.jugster.ir\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")