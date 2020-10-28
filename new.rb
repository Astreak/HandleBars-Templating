require 'socket'
server  = TCPServer.new('localhost', 8000)
loop {
  client  = server.accept
  request = client.readpartial(2048)
  puts request
}