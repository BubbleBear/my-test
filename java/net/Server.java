import java.lang.Runnable;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.net.ServerSocket;
import java.io.IOException;

public class Server{
    private ServerSocket server = new ServerSocket();

    public static Integer port = 7777;

    public static void main(String[] args) {
        try {
            Server s = new Server();
            s.listen(s.port);
        } catch (IOException e) {
            System.out.println(e);
        }
    }

    public Server() throws IOException {
        ;
    }

    public void listen(Integer port) throws IOException {
        server.bind(new InetSocketAddress(port));
        System.out.println("listening on " + port);
        while (true) {
            Socket sock = server.accept();
            new Thread(new Handler(sock)).start();
        }
    }
}

class Handler implements Runnable {
    private Socket socket;

    Handler(Socket sock) {
        socket = sock;
    }

    public void run() {
        System.out.println("asdf");
    }
}