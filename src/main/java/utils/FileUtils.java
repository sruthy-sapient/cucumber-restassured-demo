package utils;

import io.restassured.config.LogConfig;
import org.apache.commons.io.output.WriterOutputStream;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintStream;
import java.time.LocalDateTime;

import static io.restassured.RestAssured.config;
import static utils.RequestResponseSpec.scenarioName;

public class FileUtils {

    public static PrintStream loggingToFile(String fileName) {
        FileWriter fileWriter = null;
        try {
            fileWriter = new FileWriter(fileName);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return new PrintStream(new WriterOutputStream(fileWriter), true);

    }

    public static void loggingReqAndResToFile() {
        config = config().logConfig(new LogConfig().defaultStream(loggingToFile("reqres\\" + fileName() + ".txt")));
    }

    public static String fileName() {
        String completeFileName = scenarioName.concat(getCurrentDateAndTime().toString())
                .replaceAll("[^a-zA-Z0-9]", "_");
        return completeFileName;
    }

    public static LocalDateTime getCurrentDateAndTime() {
        return java.time.LocalDateTime.now();
    }

    public static File readingFromFile(String path) {
        return new File(path);
    }
}
