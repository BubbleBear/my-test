import java.lang.Runnable;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.net.ServerSocket;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;

public class Server{
    private ServerSocket server = new ServerSocket();

    public static Integer port = 7777;

    public static void main(String[] args) {
        try {
            Server s = new Server();
            s.listen(Server.port);
        } catch (IOException e) {
            e.printStackTrace();
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

    private InputStream is;

    private OutputStream os;

    Handler(Socket sock) throws IOException {
        socket = sock;
        is = socket.getInputStream();
        os = socket.getOutputStream();
        System.out.println("connected with " + socket.getRemoteSocketAddress());
    }

    public void run() {
        BufferedReader br = new BufferedReader(new InputStreamReader(is));
        String buff;
        try {
            while ((buff = br.readLine()) != null) {
                System.out.println(buff);
            }
            br.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}