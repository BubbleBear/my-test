import java.net.InetSocketAddress;
import java.net.Socket;
import java.io.IOException;

public class Client {
    private Socket socket = new Socket();

    public void connect(Integer port) {
        try {
            socket.connect(new InetSocketAddress(port));
        } catch (IOException e) {
            System.out.println(e);
        }
    }

    public static void main(String[] args) {
        Client c = new Client();
        c.connect(7777);
    }
}