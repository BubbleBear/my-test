import java.net.InetSocketAddress;
import java.net.Socket;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;

public class Client {
    private Socket socket = new Socket();

    private InputStream is;

    private OutputStream os;

    public void connect(Integer port) {
        try {
            socket.connect(new InetSocketAddress(port));
            is = socket.getInputStream();
            os = socket.getOutputStream();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void hello() {
        PrintWriter pw = new PrintWriter(os, true);
        pw.println("hello");

        BufferedReader br = new BufferedReader(new InputStreamReader(is));
        String buff;
        while ((buff = br.readLine()) != null) {
            System.out.println(buff);
        }
    }

    public static void main(String[] args) {
        Client c = new Client();
        c.connect(7777);
        c.hello();
    }
}